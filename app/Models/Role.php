<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function contacts(): BelongsToMany
    {
        return $this->belongsToMany(Contact::class, 'role_contact');
    }

    public function properties(): BelongsToMany
    {
        return $this->belongsToMany(Property::class,
            'role_property_permissions')->withPivot('permission_id');
    }
}
