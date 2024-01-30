<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RolePropertyPermission extends Model
{
    use HasFactory;

    protected $fillable = ['role_id', 'property_id', 'permission_id'];

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

    public function permission(): BelongsTo
    {
        return $this->belongsTo(Permission::class);
    }
}
