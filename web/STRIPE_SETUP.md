# Stripe Integration Setup

## 1. Get your Stripe keys

1. Go to https://dashboard.stripe.com/register and create an account
2. Once logged in, go to https://dashboard.stripe.com/test/apikeys
3. Copy your test keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`)

## 2. Set up environment variables

Create a `.env.local` file in the root of the web directory:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE

# Your domain
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 3. Test the integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Go to the pricing section and click "Предзаказ $19" on the Solo plan

3. You'll be redirected to Stripe Checkout

4. Use test card details:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

## 4. Production setup

For production:
1. Get your live API keys from https://dashboard.stripe.com/apikeys
2. Update `.env.production` with live keys
3. Update `NEXT_PUBLIC_APP_URL` to your production domain

## Features included:

- ✅ Subscription checkout for Solo plan ($19/month or $190/year)
- ✅ Support for promotional codes
- ✅ Billing address collection
- ✅ Success page after payment
- ✅ Automatic redirect to Stripe Checkout
- ✅ Russian and English language support

## Testing different scenarios:

- **Successful payment**: Use card `4242 4242 4242 4242`
- **Declined payment**: Use card `4000 0000 0000 0002`
- **Authentication required**: Use card `4000 0025 0000 3155`

## Webhook setup (optional):

To handle subscription events (renewals, cancellations):

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run webhook forwarding:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
3. Create webhook endpoint at `/api/stripe/webhook` to handle events 