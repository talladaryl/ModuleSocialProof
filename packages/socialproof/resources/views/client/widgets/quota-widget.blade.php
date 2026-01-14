<x-filament-widgets::widget>
    <x-filament::section>
        <x-slot name="heading">
            Utilisation des quotas
        </x-slot>

        @if($plan)
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                @foreach($quotas as $key => $quota)
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                            {{ $quota['label'] }}
                        </div>
                        
                        @if($quota['unlimited'])
                            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                {{ number_format($quota['used']) }}
                            </div>
                            <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                Illimité
                            </div>
                        @else
                            @php
                                $percentage = $quota['limit'] > 0 ? ($quota['used'] / $quota['limit']) * 100 : 0;
                                $colorClass = $percentage >= 90 ? 'bg-danger-500' : ($percentage >= 70 ? 'bg-warning-500' : 'bg-success-500');
                            @endphp
                            
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">
                                {{ number_format($quota['used']) }}
                                <span class="text-sm font-normal text-gray-500">/ {{ number_format($quota['limit']) }}</span>
                            </div>
 dark:text-900 ext-gray-t-semibold tl-2 fonn class="m     <spa               n>
    l:</spalan actue>P-400"ay:text-gry-500 darkm text-gras="text-sclasn pa      <s              
      <div>                 etween">
 ustify-br jte items-cens="flexdiv clas        <
        00">er-gray-7 dark:bordr-gray-200rdeer-t bo bord="mt-4 pt-4<div class                     
</div>
              ndforeach
          @e   </div>
                       @endif
                    
        </div>                        utilisé
 }}% 1) entage, t($percumber_forma       {{ n               
          0 mt-1">gray-50xt-k:teay-400 dar-xs text-grass="text     <div cl                        
                  
            </div>                     iv>
       </d                    
         /div>           <                       %">
  ge, 100) }}entaercmin($pwidth: {{ =" style                                        " 
ion-300n-all durattransitiounded-full rolass }} h-2 {{ $colorC" <div class=                                 -2">
  l hded-fulray-700 rounark:bg-gg-gray-200 ds="w-full b <div clas                             >
  -2""mts= <div clas                                     
       