<?php

namespace App\Repositories;

interface ContactRepositoryInterface
{
    public function create(array $contact);
    public function getContactByEmail($email);
}
