<?php

namespace App\Repositories;

use App\Models\Contact;


class ContactRepository implements ContactRepositoryInterface
{

    public function create(array $contact)
    {
        return Contact::create($contact);
    }

    public function getContactByEmail($email)
    {
        return Contact::where('email', $email)->first();
    }
}
