import React from 'react';

export default function SkeletonLoader() {
    return (
        <div class='m-auto w-full catalog-product grid grid-cols-5 gap-4 py-8'>
            {/* <!--Item 01--> */}
            <div class='animate-pulse space-y-2'>
                <div class='flex-1 space-y-2'>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                </div>
            </div>

            {/* <!--Item 02--> */}
            <div class='animate-pulse space-y-2'>
                <div class='flex-1 space-y-2'>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                </div>
            </div>

            {/* <!--Item 03--> */}
            <div class='animate-pulse space-y-2'>
                <div class='flex-1 space-y-2'>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                </div>
            </div>
            {/* <!--Item 04--> */}
            <div class='animate-pulse space-y-2'>
                <div class='flex-1 space-y-2'>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                </div>
            </div>
            {/* <!--Item 05--> */}
            <div class='animate-pulse space-y-2'>
                <div class='flex-1 space-y-2'>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                    <div class='h-8 bg-gray-200 w-full'></div>
                </div>
            </div>
        </div>
    );
}
