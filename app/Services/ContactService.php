<?php

namespace App\Services;

use App\Models\Contact;
use App\Models\ContactInfo;
use App\Models\Role;
use App\Repositories\ContactRepository;
use Illuminate\Support\Facades\Hash;

class ContactService
{
    protected $contactRepository;

    public function __construct(ContactRepository $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function createContact(array $contact) : Contact
    {

        if (!isset($contact['roleId'])) {
            $contact['roleId'] = 1;
        }

        $newContact = Contact::create($contact);


        ContactInfo::create([
            'contact_id' => $newContact->id,
            'firstName' => $contact['firstName'],
            'lastName' => $contact['lastName'],
        ]);

        $roleId = $contact['roleId'];
        $newContact->roles()->attach($roleId);

        return $newContact;
    }

    public function getContactByEmail(string $email) : Contact
    {
        return $this->contactRepository->getContactByEmail($email);
    }

    public function getContactById(int $id)
    {
        return $this->contactRepository->getContactById($id);
    }

    public function validatePassword($contactData) : bool
    {
        $contact = $this->contactRepository->getContactByEmail($contactData['email']);

        if (!$contact || !Hash::check($contactData['password'], $contact->password)) {
            return false;
        }

        return Hash::check($contactData['password'], $contact->password);
    }

    public function getAllContacts()
    {
        return $this->contactRepository->getAllContacts();
    }

    public function editContact($newContact, $id)
    {
        $contact = $this->contactRepository->getContactById($id);

        if ($contact['alias'] != $newContact['alias']) {
            $contact->update([
                'alias'  => $newContact['alias']
            ]);
        }
        if (ContactInfo::where('contact_id', $id)->first()) {
            $contact->contactInfo()->update([
                'first_name'    => $newContact['first_name'] ?? null,
                'last_name'     => $newContact['last_name'] ?? null,
                'address'       => $newContact['address'] ?? null,
                'phone_number'  => $newContact['phone_number'] ?? null,
                'organization'  => $newContact['organization'] ?? null,
                'messenger'     => $newContact['messenger'] ?? null,
            ]);
        } else {
            $contact->contactInfo()->create([
                'first_name'    => $newContact['first_name'] ?? null,
                'last_name'     => $newContact['last_name'] ?? null,
                'address'       => $newContact['address'] ?? null,
                'phone_number'  => $newContact['phone_number'] ?? null,
                'organization'  => $newContact['organization'] ?? null,
                'messenger'     => $newContact['messenger'] ?? null,
            ]);
        }

        foreach ($newContact['roleId'] as $role) {
            $contact->roles()->sync([$role]);
        }

        $updatedContact = $this->contactRepository->getContactById($id);

        return $updatedContact;
    }

    public function deleteContact($id): void
    {
        Contact::destroy($id);
    }

    public function changeStatus($id, $status): void
    {
        $contact = $this->contactRepository->getContactById($id);

        $contact->update([
            'status'  => $status['status']
        ]);
    }

    public function getContactStatus($contactId)
    {
        $contact = $this->contactRepository->getContactById($contactId);
        $contactStatus = $contact['status'];

        return $contactStatus;
    }

    public function getContactRole($contactId)
    {
        $contact = $this->contactRepository->getContactById($contactId);

        return Role::whereHas('contacts', function ($query) use ($contactId) {
        $query->where('contact_id', $contactId);
        })->get();
    }
}
