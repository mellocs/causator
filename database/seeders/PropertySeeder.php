<?php

namespace Database\Seeders;

use App\Models\Property;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Property::factory()->create(['name' => 'user']);
        Property::factory()->create(['name' => 'topic']);
        Property::factory()->create(['name' => 'test']);
    }
}
