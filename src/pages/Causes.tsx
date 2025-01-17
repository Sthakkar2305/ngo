import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Leaf, Home, Users, Lightbulb } from 'lucide-react';

const causes = [
  {
    title: 'Education for All',
    description: 'Providing quality education to underprivileged children across India.',
    icon: BookOpen,
    stats: {
      beneficiaries: '15,000+',
      locations: '50+',
      metric: 'Students Enrolled'
    }
  },
  {
    title: 'Healthcare Access',
    description: 'Making healthcare accessible in rural and urban communities.',
    icon: Heart,
    stats: {
      beneficiaries: '25,000+',
      locations: '75+',
      metric: 'Patients Treated'
    }
  },
  {
    title: 'Environmental Conservation',
    description: 'Promoting sustainable practices and environmental awareness.',
    icon: Leaf,
    stats: {
      beneficiaries: '10,000+',
      locations: '30+',
      metric: 'Trees Planted'
    }
  },
  {
    title: 'Rural Development',
    description: 'Empowering rural communities through infrastructure and skills development.',
    icon: Home,
    stats: {
      beneficiaries: '5,000+',
      locations: '25+',
      metric: 'Households Impacted'
    }
  },
  {
    title: 'Women Empowerment',
    description: 'Supporting women through education, skills training, and entrepreneurship.',
    icon: Users,
    stats: {
      beneficiaries: '7,500+',
      locations: '40+',
      metric: 'Women Empowered'
    }
  },
  {
    title: 'Innovation & Technology',
    description: 'Bringing digital literacy and technology education to rural India.',
    icon: Lightbulb,
    stats: {
      beneficiaries: '3,000+',
      locations: '20+',
      metric: 'Students Trained'
    }
  }
];

const Causes = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Causes</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We work across multiple domains to create lasting positive impact in communities 
          across India. Each cause represents our commitment to sustainable development 
          and social change.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <cause.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{cause.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{cause.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Beneficiaries:</span>
                    <span className="font-semibold">{cause.stats.beneficiaries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Locations:</span>
                    <span className="font-semibold">{cause.stats.locations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impact:</span>
                    <span className="font-semibold">{cause.stats.metric}</span>
                  </div>
                </div>
                <Link to="/get-involved">
                  <Button className="w-full">Support This Cause</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;