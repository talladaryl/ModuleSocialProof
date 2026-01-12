import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SocialProofExampleController::trackPurchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
export const trackPurchase = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackPurchase.url(options),
    method: 'post',
})

trackPurchase.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/purchase',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackPurchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
trackPurchase.url = (options?: RouteQueryOptions) => {
    return trackPurchase.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackPurchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
trackPurchase.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackPurchase.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::trackPurchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
    const trackPurchaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: trackPurchase.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::trackPurchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
        trackPurchaseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: trackPurchase.url(options),
            method: 'post',
        })
    
    trackPurchase.form = trackPurchaseForm
/**
* @see \App\Http\Controllers\SocialProofExampleController::trackSignup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
export const trackSignup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackSignup.url(options),
    method: 'post',
})

trackSignup.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/signup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackSignup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
trackSignup.url = (options?: RouteQueryOptions) => {
    return trackSignup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackSignup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
trackSignup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackSignup.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::trackSignup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
    const trackSignupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: trackSignup.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::trackSignup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
        trackSignupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: trackSignup.url(options),
            method: 'post',
        })
    
    trackSignup.form = trackSignupForm
/**
* @see \App\Http\Controllers\SocialProofExampleController::trackReview
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
export const trackReview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackReview.url(options),
    method: 'post',
})

trackReview.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackReview
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
trackReview.url = (options?: RouteQueryOptions) => {
    return trackReview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::trackReview
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
trackReview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: trackReview.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::trackReview
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
    const trackReviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: trackReview.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::trackReview
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
        trackReviewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: trackReview.url(options),
            method: 'post',
        })
    
    trackReview.form = trackReviewForm
const SocialProofExampleController = { trackPurchase, trackSignup, trackReview }

export default SocialProofExampleController