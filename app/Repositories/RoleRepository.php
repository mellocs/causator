<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class RoleRepository
{
    public function getAllRoles()
    {
        return Role::all();
    }

    public function getContactsByRole($roleId)
    {
        return Contact::whereHas('roles', function ($query) use ($roleId) {
            $query->where('role_id', $roleId);
        })->get();
    }

    public function getRoleIdByName($role)
    {
        return Role::where('name', $role)->first();
    }

    public function getContactRoles($contactId)
    {
        return Contact::find($contactId)->roles()->get();
    }
    public function hasRole($role)
    {
        $contact = Auth::user();
        $roles = $this->getContactRoles($contact['id']);

        foreach ($roles as $item) {
            if ($item->name == $role) {
                return true;
            }
        }

        return false;
    }
}
