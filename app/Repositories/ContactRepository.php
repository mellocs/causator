<?php

namespace App\Repositories;

use App\Models\Contact;


class ContactRepository
{
    public function getContactByEmail($email) : Contact
    {
        return Contact::where('email', $email)->first();
    }
    public function getContactByAlias($alias) : Contact
    {
        return Contact::where('alias', $alias)->first();
    }

    public function getContactById($id) : Contact
    {
        return Contact::where('id', $id)->with('contactInfo')->first();
    }

    public function getAllContacts()
    {
        return Contact::with('contactInfo')->get();
    }
}
