<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\CheckboxList;
use Packages\SocialProof\Models\Plan;
use Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages;
use UnitEnum;
use BackedEnum;

Class EventResource extends Resource{
    protected static ?string $model = Plan::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static string|UnitEnum|null $navigationGroup = 'Evenement';
    protected static ?int $navigationSort = 8;
    protected static ?string $navigationLabel = 'Plans';

    public


 
}