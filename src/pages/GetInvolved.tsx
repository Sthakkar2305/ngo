import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Gift, Building, Calendar, Phone } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          There are many ways to support our mission and make a difference. 
          Choose the path that best suits your capacity to contribute to positive change.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Heart className="h-6 w-6 text-primary" />
                <CardTitle>Volunteer</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join our community of dedicated volunteers and contribute your time 
                and skills to various projects and initiatives.
              </p>
              <Button className="w-full">Register as Volunteer</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Gift className="h-6 w-6 text-primary" />
                <CardTitle>Donate</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Support our causes financially. Every contribution, big or small, 
                helps us create lasting impact in communities.
              </p>
              <Link to="/donate">
                <Button className="w-full">Make a Donation</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Building className="h-6 w-6 text-primary" />
                <CardTitle>Partner With Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Organizations can partner with us for CSR initiatives or 
                collaborative projects for social impact.
              </p>
              <Link to="/contact">
                <Button className="w-full">Become a Partner</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Registration</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your full name"
                />
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
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your city"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Areas of Interest
              </label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Select an area</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="environment">Environment</option>
                <option value="community">Community Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Message (Optional)
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Tell us about yourself and how you'd like to contribute"
              ></textarea>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Submit Application
            </Button>
          </form>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-6">
            Contact our volunteer coordination team for any questions or concerns.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;