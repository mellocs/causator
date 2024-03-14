<?php

namespace App\Http\Controllers;


use App\Services\ContactService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function index()
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

    public function create(Request $request)
    {
        $contactData = $request->validate([
            'email' => 'required|string|unique:contacts,email',
            'alias' => 'required|string|unique:contacts,alias',
            'roleId' => 'required|int',
            'password' => 'required|string'
        ]);

        $contact = $this->contactService->createContact($contactData);

        return response()->json([
            'contact' => $contact
        ], 201);
    }

    public function edit(Request $request, int $id)
    {
        $validatedRequest = $this->validate($request, [
            'alias'         => 'string|unique:contacts,alias',
            'first_name'    => 'string',
            'last_name'     => 'string',
            'address'       => 'string',
            'phone_number'  => 'int',
            'organization'  => 'string',
            'messenger'     => 'string'
        ]);

        $contact = $this->contactService->editContact($validatedRequest, $id);

        return response()->json([
            'contact' => $contact
        ], 201);
    }

    public function show($id)
    {
        $contact = $this->contactService->getContactById($id);

        return response()->json([
            'contact' => $contact
        ], 201);
    }

    public function test()
    {
        $info =  Auth::user();
        return response()->json([
           'message' =>  $info['id']
        ]);
    }
}
