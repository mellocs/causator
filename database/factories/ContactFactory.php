<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends
 */
class ContactFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'alias' => fake()->unique()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('test'),
            'remember_token' => Str::random(10),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Contact $contact) {
            $ownerRole = Role::where('name', 'owner')->first();

            $roles = Role::where('id', '!=', $ownerRole->id)->get()->random(mt_rand(1, 1))->pluck('id');
            $contact->roles()->attach($roles);
        });
    }
}
