<?php

namespace App\Repositories;

use App\Models\Contact;


class ContactRepository
{
    public function getContactByEmail($email)
    {
        return Contact::where('email', $email)->first();
    }

    public function getAllContacts()
    {
        return Contact::with('contactInfo')->get();
    }
}
