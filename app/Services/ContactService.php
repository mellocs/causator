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

    public function editContact(array $contact, $id)
    {
        $contact = $this->contactRepository->getContactById($id);

        $contact->update([
            'alias' => $contact->alias,
        ]);

        $contact->contactInfo()->update([
            'first_name'    => $contact['first_name'],
            'last_name'     => $contact['last_name'],
            'address'       => $contact['address'],
            'phone_number'  => $contact['phone_number'],
            'organization'  => $contact['organization'],
            'messenger'     => $contact['messenger'],
        ]);

        return $contact;
    }
}
