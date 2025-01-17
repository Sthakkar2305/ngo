import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, CreditCard, IndianRupee } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState(false);

  const predefinedAmounts = ['500', '1000', '2000', '5000'];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us continue our mission of empowering communities 
            across India. Every donation, big or small, makes a difference.
          </p>
        </div>

        <Card className="p-6 mb-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Amount</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {predefinedAmounts.map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => {
                      setAmount(preset);
                      setCustomAmount(false);
                    }}
                  >
                    ₹{preset}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="customAmount"
                  checked={customAmount}
                  onChange={(e) => setCustomAmount(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="customAmount" className="text-sm">
                  Enter custom amount
                </label>
              </div>
              {customAmount && (
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 p-2 border rounded-md"
                    placeholder="Enter amount"
                  />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter cardholder name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        type="text"
                        className="w-full pl-10 p-2 border rounded-md"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Donate ₹{amount}
                </Button>
              </form>
            </div>
          </div>
        </Card>

        <div className="bg-primary/5 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Donate</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Bank Transfer</h3>
              <p className="text-gray-600">
                Account Name: Seva Foundation<br />
                Account Number: XXXX XXXX XXXX 1234<br />
                IFSC Code: ABCD0123456<br />
                Bank: State Bank of India
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">UPI</h3>
              <p className="text-gray-600">
                UPI ID: donate@sevafoundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;