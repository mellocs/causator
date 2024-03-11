<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'contact_id',
        'first_name',
        'last_name',
        'address',
        'phone_number',
        'organization',
        'messenger'
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
