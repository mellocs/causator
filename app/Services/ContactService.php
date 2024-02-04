<?php

namespace App\Services;

use App\Models\Contact;
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
        return Contact::create($contact);
    }

    public function getContactByEmail(string $email) : Contact
    {
        return $this->contactRepository->getContactByEmail($email);
    }

    public function validatePassword($contactData) : bool
    {
        $contact = $this->contactRepository->getContactByEmail($contactData['email']);

        if (!$contact || !Hash::check($contactData['password'], $contact->password)) {
            return false;
        }

        return Hash::check($contactData['password'], $contact->password);
    }
}
