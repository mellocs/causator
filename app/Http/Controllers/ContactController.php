<?php

namespace App\Http\Controllers;


use App\Services\ContactService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

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
            'alias'         => [
                'string',
                Rule::unique('contacts')->ignore($id),
            ],
            'first_name'    => 'string',
            'last_name'     => 'string',
            'address'       => 'string',
            'phone_number'  => 'int',
            'organization'  => 'string',
            'messenger'     => 'string',
            'roleId'        => 'int'
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

    public function getCurrentContact()
    {
        $contact = Auth::user();

        return response()->json([
           'contact' => $contact
        ]);
    }

    public function deleteContact($id)
    {
        $this->contactService->deleteContact($id);

        return response()->json([
            'message' => "Contact successful deleted"
        ]);
    }

    public function changeStatus(Request $request, int $id)
    {
        $status = $this->validate($request, [
            'status' => 'string'
        ]);

        try {

            $this->contactService->changeStatus($id, $status);

        } catch (Exception $e) {

            return response()->json([
                'error' => 'Error with changing status'
            ], 500);
        }


        return response()->json([
            'message' => "Status successful changed"
        ]);
    }
}
