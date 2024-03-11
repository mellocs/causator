<?php

namespace App\Http\Controllers;

use App\Services\ContactService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function register(Request $request)
    {
        $contactData = $request->validate([
            'email' => 'required|string|unique:contacts,email',
            'alias' => 'required|string|unique:contacts,alias',
            'password' => 'required|string|confirmed'
        ]);

        $contact = $this->contactService->createContact($contactData);

        $token = $contact->createToken('causatortoken')->plainTextToken;

        return response()->json([
            'contact' => $contact,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $contactData = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $contact = $this->contactService->getContactByEmail($contactData['email']);

        if ($this->contactService->validatePassword($contactData)) {
            $token = $contact->createToken('causatortoken')->plainTextToken;

            return response()->json([
                'contact' => $contact,
                'token' => $token
            ], 201);
        } else {
            return response()->json([
                'message' => 'Bad Credentials'
            ], 401);
        }

    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
