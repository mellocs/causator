<?php

namespace App\Http\Controllers;


use App\Services\ContactService;

class ContactController extends Controller
{
    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function getAllContacts()
    {
        $contacts = $this->contactService->getAllContacts();

        return response()->json([
            'contacts' => $contacts
        ], 201);
    }

    public function getUserPermissions()
    {
      //
    }
}
