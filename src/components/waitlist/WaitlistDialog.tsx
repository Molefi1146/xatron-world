
import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const WaitlistDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "+27",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, firstName, lastName, phoneNumber } = formData;
    
    if (!email || !firstName || !lastName || !phoneNumber) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number starts with +27
    if (!phoneNumber.startsWith("+27")) {
      toast({
        title: "Invalid phone number",
        description: "Phone number must start with +27 for South Africa",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber
        }]);

      if (error) throw error;

      toast({
        title: "Thanks for joining!",
        description: "We'll notify you when we launch.",
      });
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "+27",
      });
      setIsOpen(false);
    } catch (error: any) {
      if (error.code === '23505') {
        toast({
          title: "Already registered",
          description: "This email is already on our waitlist.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white"
          disabled={isSubmitting}
        >
          <Mail className="mr-2 h-4 w-4" />
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            Join Our Waitlist
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="bg-gray-800/50 border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="bg-gray-800/50 border-gray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+27 12 345 6789"
              value={formData.phoneNumber}
              onChange={(e) => {
                let value = e.target.value;
                // Ensure the value always starts with +27
                if (!value.startsWith('+27')) {
                  value = '+27' + value.replace(/^\+27/, '');
                }
                setFormData(prev => ({ ...prev, phoneNumber: value }));
              }}
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Submit'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
