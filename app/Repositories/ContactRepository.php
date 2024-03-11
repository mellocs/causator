<?php

namespace App\Repositories;

use App\Models\Contact;


class ContactRepository
{
    public function getContactByEmail($email) : Contact
    {
        return Contact::where('email', $email)->first();
    }

    public function getContactById($id)
    {
        return Contact::findOrFail($id)->with('contactInfo')->first();
    }

    public function getAllContacts() : array
    {
        return Contact::with('contactInfo')->get();
    }
}
