<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Role;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    public function run()
    {
        $contact = Contact::factory()->create([
            'alias' => 'test',
            'email' => 'test@test.test',
            'password' => 'test'
        ]);

        Contact::factory()->count(50)->create();
    }
}
