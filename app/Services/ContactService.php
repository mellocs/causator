<?php

namespace App\Services;

use App\Models\Contact;
use App\Models\ContactInfo;
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
        if (!isset($contact['role_id'])) {
            $contact['roleId'] = 1;
        }

        $newContact = Contact::create($contact);


        ContactInfo::create([
            'contact_id' => $newContact->id
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

        $contact->contactInfo()->update([
            'first_name'    => $newContact['first_name'],
            'last_name'     => $newContact['last_name'],
            'address'       => $newContact['address'],
            'phone_number'  => $newContact['phone_number'],
            'organization'  => $newContact['organization'],
            'messenger'     => $newContact['messenger'],
        ]);

        $contact->roles()->sync([$newContact['roleId']]);

        return $contact;
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
}
