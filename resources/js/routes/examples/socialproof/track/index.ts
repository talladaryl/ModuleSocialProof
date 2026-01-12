import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SocialProofExampleController::purchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
export const purchase = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: purchase.url(options),
    method: 'post',
})

purchase.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/purchase',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::purchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
purchase.url = (options?: RouteQueryOptions) => {
    return purchase.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::purchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
purchase.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: purchase.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::purchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
    const purchaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: purchase.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::purchase
 * @see app/Http/Controllers/SocialProofExampleController.php:19
 * @route '/examples/socialproof/track/purchase'
 */
        purchaseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: purchase.url(options),
            method: 'post',
        })
    
    purchase.form = purchaseForm
/**
* @see \App\Http\Controllers\SocialProofExampleController::signup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
export const signup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: signup.url(options),
    method: 'post',
})

signup.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/signup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::signup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
signup.url = (options?: RouteQueryOptions) => {
    return signup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::signup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
signup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: signup.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::signup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
    const signupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: signup.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::signup
 * @see app/Http/Controllers/SocialProofExampleController.php:46
 * @route '/examples/socialproof/track/signup'
 */
        signupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: signup.url(options),
            method: 'post',
        })
    
    signup.form = signupForm
/**
* @see \App\Http\Controllers\SocialProofExampleController::review
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
export const review = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(options),
    method: 'post',
})

review.definition = {
    methods: ["post"],
    url: '/examples/socialproof/track/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialProofExampleController::review
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
review.url = (options?: RouteQueryOptions) => {
    return review.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialProofExampleController::review
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
review.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: review.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialProofExampleController::review
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
    const reviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: review.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialProofExampleController::review
 * @see app/Http/Controllers/SocialProofExampleController.php:71
 * @route '/examples/socialproof/track/review'
 */
        reviewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: review.url(options),
            method: 'post',
        })
    
    review.form = reviewForm
const track = {
    purchase: Object.assign(purchase, purchase),
signup: Object.assign(signup, signup),
review: Object.assign(review, review),
}

export default track