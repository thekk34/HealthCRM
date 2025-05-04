
// Healthcare CRM Application using React and Tailwind CSS
// Main App component

// --- Shadcn UI Component Placeholders ---
// In a real setup, you would install and import these components:
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Calendar } from "@/components/ui/calendar";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// For this example, we'll use basic HTML elements styled with Tailwind
// or simple functional components mimicking the structure.

// --- Lucide Icons Placeholders ---
// In a real setup, you would install and import icons:
// import { LayoutDashboard, Users, CalendarDays, MessageSquare, FileText, CreditCard, Menu, X, Phone, Mail, MapPin, Bell, Settings, LogOut, Search, ChevronDown } from 'lucide-react';

// For this example, we'll use inline SVGs or simple text placeholders.

// --- Helper: Inline SVG Icons ---
// Using inline SVGs for simplicity in this environment
import React from 'react';

const IconLayoutDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconCalendarDays = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
const IconMessageSquare = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconFileText = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
const IconCreditCard = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>;
const IconMenu = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconBell = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const IconLogOut = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>;
const IconChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const IconSend = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconPaperclip = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;


// --- Mock Data ---
const mockPatients = [
  { id: 'P001', name: 'Alice Johnson', age: 34, lastVisit: '2024-04-15', nextAppointment: '2024-05-20', status: 'Active', avatar: 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AJ' },
  { id: 'P002', name: 'Bob Williams', age: 58, lastVisit: '2024-03-10', nextAppointment: null, status: 'Inactive', avatar: 'https://placehold.co/40x40/DBEAFE/1D4ED8?text=BW' },
  { id: 'P003', name: 'Charlie Brown', age: 22, lastVisit: '2024-04-28', nextAppointment: '2024-05-18', status: 'Active', avatar: 'https://placehold.co/40x40/FEF3C7/D97706?text=CB' },
  { id: 'P004', name: 'Diana Garcia', age: 45, lastVisit: '2024-04-01', nextAppointment: '2024-06-01', status: 'Active', avatar: 'https://placehold.co/40x40/FCE7F3/DB2777?text=DG' },
];

const mockAppointments = [
  { id: 'A001', patientName: 'Alice Johnson', doctor: 'Dr. Smith', date: '2024-05-20', time: '10:00 AM', type: 'Check-up', status: 'Scheduled' },
  { id: 'A002', patientName: 'Charlie Brown', doctor: 'Dr. Lee', date: '2024-05-18', time: '02:30 PM', type: 'Follow-up', status: 'Scheduled' },
  { id: 'A003', patientName: 'Eva Martinez', doctor: 'Dr. Smith', date: '2024-05-15', time: '09:00 AM', type: 'Consultation', status: 'Completed' },
];

const mockMessages = [
    { id: 1, sender: 'Alice Johnson', text: 'Hi Dr. Smith, just confirming my appointment for tomorrow.', timestamp: '10:30 AM', incoming: true },
    { id: 2, sender: 'You', text: 'Hi Alice, yes, your appointment is confirmed for 10:00 AM. See you then!', timestamp: '10:32 AM', incoming: false },
    { id: 3, sender: 'Bob Williams', text: 'Can I reschedule my appointment?', timestamp: 'Yesterday', incoming: true },
    { id: 4, sender: 'You', text: 'Hi Bob, certainly. Please call the reception to find a suitable time.', timestamp: 'Yesterday', incoming: false },
];

const mockRecords = {
    'P001': {
        name: 'Alice Johnson',
        dob: '1990-03-12',
        bloodType: 'O+',
        allergies: ['Penicillin', 'Peanuts'],
        conditions: ['Hypertension'],
        medications: ['Lisinopril 10mg'],
        visits: [
            { date: '2024-04-15', doctor: 'Dr. Smith', reason: 'Annual Check-up', notes: 'Blood pressure slightly elevated. Continue Lisinopril. Follow up in 1 month if no improvement.' },
            { date: '2023-11-20', doctor: 'Dr. Smith', reason: 'Flu symptoms', notes: 'Prescribed Tamiflu. Rest advised.' },
        ]
    },
    'P003': {
        name: 'Charlie Brown',
        dob: '2002-08-25',
        bloodType: 'A-',
        allergies: ['None'],
        conditions: ['Asthma (Mild)'],
        medications: ['Albuterol Inhaler (as needed)'],
        visits: [
            { date: '2024-04-28', doctor: 'Dr. Lee', reason: 'Asthma Follow-up', notes: 'Symptoms well controlled. Continue current medication plan.' },
        ]
    }
};

const mockInvoices = [
    { id: 'INV-0123', patientName: 'Alice Johnson', date: '2024-04-15', amount: '$150.00', status: 'Paid', service: 'Annual Check-up' },
    { id: 'INV-0124', patientName: 'Charlie Brown', date: '2024-04-28', amount: '$75.00', status: 'Pending', service: 'Asthma Follow-up' },
    { id: 'INV-0120', patientName: 'Bob Williams', date: '2024-03-10', amount: '$120.00', status: 'Paid', service: 'Consultation' },
];


// --- UI Components (Simplified Shadcn Placeholders) ---

// Button Component
const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-blue-500',
    ghost: 'hover:bg-gray-100 text-gray-900 focus:ring-blue-500',
    link: 'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500',
  };
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className = '' }) => <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>{children}</div>;
const CardHeader = ({ children, className = '' }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
const CardTitle = ({ children, className = '' }) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
const CardContent = ({ children, className = '' }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const CardFooter = ({ children, className = '' }) => <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;

// Input Component
const Input = ({ className = '', type = 'text', ...props }) => <input type={type} className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;

// Textarea Component
const Textarea = ({ className = '', ...props }) => <textarea className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;

// Avatar Component
const Avatar = ({ children, className = '' }) => <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>;
const AvatarImage = ({ src, alt, className = '' }) => <img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} onError={(e) => e.target.style.display='none'} />;
const AvatarFallback = ({ children, className = '' }) => <span className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}>{children}</span>;

// Table Components
const Table = ({ children, className = '' }) => <div className="w-full overflow-auto"><table className={`w-full caption-bottom text-sm ${className}`}>{children}</table></div>;
const TableHeader = ({ children, className = '' }) => <thead className={`[&_tr]:border-b ${className}`}>{children}</thead>;
const TableBody = ({ children, className = '' }) => <tbody className={`[&_tr:last-child]:border-0 ${className}`}>{children}</tbody>;
const TableRow = ({ children, className = '' }) => <tr className={`border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-100 ${className}`}>{children}</tr>;
const TableHead = ({ children, className = '' }) => <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0 ${className}`}>{children}</th>;
const TableCell = ({ children, className = '' }) => <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>{children}</td>;

// --- App Components ---

// Sidebar Navigation
function Sidebar({ currentView, setView, isMobileMenuOpen, closeMobileMenu }) {
  const navItems = [
    { name: 'Dashboard', icon: IconLayoutDashboard, view: 'dashboard' },
    { name: 'Patients', icon: IconUsers, view: 'patients' },
    { name: 'Appointments', icon: IconCalendarDays, view: 'appointments' },
    { name: 'Chat', icon: IconMessageSquare, view: 'chat' },
    { name: 'Medical Records', icon: IconFileText, view: 'records' },
    { name: 'Billing', icon: IconCreditCard, view: 'billing' },
  ];

  const baseClasses = "flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors";
  const activeClasses = "bg-blue-100 text-blue-700";
  const inactiveClasses = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 md:justify-center">
        <span className="text-xl font-bold text-blue-600">HealthCRM</span>
        <button onClick={closeMobileMenu} className="md:hidden text-gray-500 hover:text-gray-700">
           <IconX />
        </button>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={(e) => {
                e.preventDefault();
                setView(item.view);
                if (isMobileMenuOpen) closeMobileMenu(); // Close mobile menu on item click
            }}
            className={`${baseClasses} ${currentView === item.view ? activeClasses : inactiveClasses}`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </a>
        ))}
      </nav>
       <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
            <a href="#" className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                <IconSettings className="mr-3 h-5 w-5" /> Settings
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                <IconLogOut className="mr-3 h-5 w-5" /> Logout
            </a>
       </div>
    </aside>
  );
}

// Header Bar
function Header({ toggleMobileMenu }) {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 md:px-6">
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 md:hidden">
                <IconMenu />
            </button>
            <div className="flex items-center gap-4 ml-auto">
                 {/* Search Bar (Optional) */}
                <div className="relative hidden sm:block">
                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Search patients, appointments..." className="pl-10 pr-4 py-2 h-9 w-64" />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                   <IconBell className="h-5 w-5" />
                   <span className="sr-only">Notifications</span>
                </Button>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/40x40/A5B4FC/1E3A8A?text=DR" alt="User Avatar" />
                        <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex md:flex-col md:items-start">
                       <span className="text-sm font-medium">Dr. Smith</span>
                       <span className="text-xs text-gray-500">Cardiologist</span>
                    </div>
                     <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                         <IconChevronDown className="h-4 w-4" />
                     </Button>
                </div>
            </div>
        </header>
    );
}


// Dashboard View
function DashboardView() {
  // Mock data for dashboard cards
  const stats = [
    { title: 'Today\'s Appointments', value: '12', change: '+2', changeType: 'increase', icon: IconCalendarDays },
    { title: 'New Patients', value: '3', change: '+1', changeType: 'increase', icon: IconUsers },
    { title: 'Pending Invoices', value: '5', change: '-1', changeType: 'decrease', icon: IconCreditCard },
    { title: 'Unread Messages', value: '8', change: '+3', changeType: 'increase', icon: IconMessageSquare },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Sections (Example) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Today and tomorrow</CardDescription>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockAppointments.slice(0, 3).map(app => (
                        <TableRow key={app.id}>
                            <TableCell className="font-medium">{app.patientName}</TableCell>
                            <TableCell>{app.date.includes('15') ? 'Today' : 'Tomorrow'} {app.time}</TableCell>
                            <TableCell>{app.type}</TableCell>
                        </TableRow>
                    ))}
                     {mockAppointments.length === 0 && <TableRow><TableCell colSpan="3" className="text-center text-gray-500 py-4">No upcoming appointments</TableCell></TableRow>}
                </TableBody>
             </Table>
          </CardContent>
           <CardFooter>
                <Button variant="outline" size="sm">View All Appointments</Button>
           </CardFooter>
        </Card>

        {/* Recent Patient Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
             <CardDescription>Latest unread messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             {mockMessages.filter(m => m.incoming).slice(0, 3).map(msg => (
                <div key={msg.id} className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>{msg.sender.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">{msg.sender}</p>
                        <p className="text-sm text-gray-600 truncate">{msg.text}</p>
                    </div>
                    <span className="ml-auto text-xs text-gray-400">{msg.timestamp}</span>
                </div>
             ))}
              {mockMessages.filter(m => m.incoming).length === 0 && <p className="text-center text-gray-500 py-4">No new messages</p>}
          </CardContent>
           <CardFooter>
                <Button variant="outline" size="sm">Go to Chat</Button>
           </CardFooter>
        </Card>
      </div>
    </div>
  );
}


// Patient List View
function PatientListView() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Patients</h1>
         <div className="flex gap-2">
             <Input placeholder="Search patients..." className="h-10 w-full sm:w-64" />
             <Button>Add New Patient</Button>
         </div>
      </div>
      <Card>
         <CardContent className="p-0">
             <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden sm:table-cell">Age</TableHead>
                    <TableHead className="hidden md:table-cell">Last Visit</TableHead>
                    <TableHead className="hidden lg:table-cell">Next Appointment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockPatients.map((patient) => (
                    <TableRow key={patient.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={patient.avatar} alt={patient.name} />
                                    <AvatarFallback>{patient.name.substring(0,1)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{patient.name}</span>
                            </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{patient.age}</TableCell>
                        <TableCell className="hidden md:table-cell">{patient.lastVisit || 'N/A'}</TableCell>
                        <TableCell className="hidden lg:table-cell">{patient.nextAppointment || 'None'}</TableCell>
                        <TableCell>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                                {patient.status}
                            </span>
                        </TableCell>
                        <TableCell>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">Edit</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
             </Table>
         </CardContent>
      </Card>
    </div>
  );
}

// Appointment Booking View (Simplified Calendar)
function AppointmentBookingView() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  // Basic Calendar Grid Generation (Replace with actual Calendar component)
  const generateCalendarDays = (date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday...
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isSelected = selectedDate && currentDate.toDateString() === selectedDate.toDateString();
      const isToday = new Date().toDateString() === currentDate.toDateString();
      days.push(
        <div key={day} className="text-center py-2">
          <button
            onClick={() => setSelectedDate(currentDate)}
            className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-colors
              ${isSelected ? 'bg-blue-600 text-white' : isToday ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}
            `}
          >
            {day}
          </button>
        </div>
      );
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[selectedDate.getMonth()];
  const currentYear = selectedDate.getFullYear();

  const goToPreviousMonth = () => {
      setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  }
   const goToNextMonth = () => {
      setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  }


  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Appointments</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle>{currentMonthName} {currentYear}</CardTitle>
                <div className="flex gap-1">
                    <Button variant="outline" size="sm" onClick={goToPreviousMonth}>Prev</Button>
                    <Button variant="outline" size="sm" onClick={goToNextMonth}>Next</Button>
                </div>
            </div>
            <CardDescription>Select a date to view or book appointments.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Simplified Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-sm font-medium text-center text-gray-500 mb-2">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays(selectedDate)}
            </div>
            {/* In a real app, use <Calendar /> component here */}
            {/* <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" /> */}
          </CardContent>
        </Card>

        {/* Booking Form / Selected Date Info */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate ? `Schedule for ${selectedDate.toLocaleDateString()}` : 'New Appointment'}
            </CardTitle>
             <CardDescription>Book a new appointment or view schedule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             {/* Display appointments for selected date */}
             <div className="space-y-2 max-h-40 overflow-y-auto">
                <h4 className="font-medium text-sm text-gray-700">Scheduled Today:</h4>
                {mockAppointments.filter(a => new Date(a.date).toDateString() === selectedDate?.toDateString()).length > 0 ?
                    mockAppointments.filter(a => new Date(a.date).toDateString() === selectedDate?.toDateString()).map(app => (
                        <div key={app.id} className="text-xs p-2 border rounded-md bg-gray-50">
                            <p><strong>{app.time}</strong> - {app.patientName} ({app.type})</p>
                            <p><em>{app.doctor}</em></p>
                        </div>
                    )) : <p className="text-xs text-gray-500 italic">No appointments scheduled for this date.</p>
                }
             </div>
             <hr/>
             {/* New Appointment Form */}
             <form className="space-y-3">
                 <div>
                    <label htmlFor="patient" className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                    <Input id="patient" name="patient" placeholder="Search patient name..." />
                 </div>
                 <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                     {/* Replace with Select component */}
                    <select id="doctor" name="doctor" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <option>Dr. Smith</option>
                        <option>Dr. Lee</option>
                        <option>Dr. Jones</option>
                    </select>
                 </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <Input id="time" name="time" type="time" defaultValue="09:00" />
                 </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Appointment Type</label>
                    <Input id="type" name="type" placeholder="e.g., Check-up, Consultation" />
                 </div>
                 <Button type="submit" className="w-full">Book Appointment</Button>
             </form>
          </CardContent>
        </Card>
      </div>

       {/* List of All Appointments */}
        <Card>
            <CardHeader>
                <CardTitle>All Scheduled Appointments</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Doctor</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockAppointments.map(app => (
                            <TableRow key={app.id}>
                                <TableCell className="font-medium">{app.patientName}</TableCell>
                                <TableCell>{app.doctor}</TableCell>
                                <TableCell>{app.date} {app.time}</TableCell>
                                <TableCell>{app.type}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        app.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                        app.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {app.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}

// Chat Interface View
function ChatInterfaceView() {
    const [selectedChat, setSelectedChat] = React.useState(mockMessages[0].sender); // Select first chat by default
    const currentChatMessages = mockMessages.filter(m => m.sender === selectedChat || (!m.incoming && selectedChat === 'Alice Johnson')); // Simplified logic for demo

    return (
        <div className="p-4 md:p-6 h-[calc(100vh-4rem)] flex flex-col"> {/* Adjust height based on header */}
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Patient Communication</h1>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 overflow-hidden">
                {/* Chat List */}
                <Card className="md:col-span-1 flex flex-col h-full">
                    <CardHeader className="p-4 border-b">
                        <Input placeholder="Search chats..." className="h-9"/>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 overflow-y-auto">
                        <nav className="space-y-1 p-2">
                            {/* Group messages by sender for chat list */}
                            {[...new Map(mockMessages.filter(m => m.incoming).map(item => [item['sender'], item])).values()].map(chat => (
                                <button
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat.sender)}
                                    className={`w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors ${selectedChat === chat.sender ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                                >
                                    <Avatar className="h-9 w-9">
                                         <AvatarFallback>{chat.sender.substring(0,1)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-sm font-medium truncate">{chat.sender}</p>
                                        <p className="text-xs text-gray-500 truncate">{chat.text}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 ml-auto">{chat.timestamp.split(' ')[0]}</span> {/* Show only time/day */}
                                </button>
                            ))}
                        </nav>
                    </CardContent>
                </Card>

                {/* Chat Window */}
                <Card className="md:col-span-3 flex flex-col h-full">
                    {selectedChat ? (
                        <>
                            <CardHeader className="p-4 border-b flex flex-row items-center gap-3">
                                 <Avatar className="h-9 w-9">
                                     <AvatarFallback>{selectedChat.substring(0,1)}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-base font-medium">{selectedChat}</CardTitle>
                                {/* Add more actions like call, info etc. here */}
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {/* Messages */}
                                {currentChatMessages.map(msg => (
                                    <div key={msg.id} className={`flex ${msg.incoming ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`max-w-[70%] p-3 rounded-lg ${msg.incoming ? 'bg-white border' : 'bg-blue-500 text-white'}`}>
                                            <p className="text-sm">{msg.text}</p>
                                            <p className={`text-xs mt-1 ${msg.incoming ? 'text-gray-400 text-right' : 'text-blue-100 text-right'}`}>{msg.timestamp}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="p-4 border-t bg-white">
                                <div className="flex items-center w-full gap-2">
                                    <Button variant="ghost" size="icon">
                                        <IconPaperclip />
                                    </Button>
                                    <Input placeholder="Type your message..." className="flex-1 h-10"/>
                                    <Button size="icon">
                                        <IconSend />
                                    </Button>
                                </div>
                            </CardFooter>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Select a chat to start messaging
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}


// Medical Records View
function MedicalRecordsView() {
    const [selectedPatientId, setSelectedPatientId] = React.useState(mockPatients[0]?.id); // Select first patient by default
    const selectedRecord = selectedPatientId ? mockRecords[selectedPatientId] : null;

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">Medical Records</h1>
                {/* Patient Selector */}
                <div className="w-full sm:w-64">
                    <label htmlFor="patient-select" className="sr-only">Select Patient</label>
                    {/* Replace with Select component */}
                    <select
                        id="patient-select"
                        value={selectedPatientId || ''}
                        onChange={(e) => setSelectedPatientId(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <option value="" disabled>Select a patient...</option>
                        {mockPatients.map(p => (
                            <option key={p.id} value={p.id}>{p.name} ({p.id})</option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedRecord ? (
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <CardTitle className="text-xl">{selectedRecord.name}</CardTitle>
                                <CardDescription>DOB: {selectedRecord.dob} | Blood Type: {selectedRecord.bloodType}</CardDescription>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2 sm:mt-0">Edit Record</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Key Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Allergies</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                    {selectedRecord.allergies.length > 0 ? selectedRecord.allergies.map((allergy, i) => <li key={i}>{allergy}</li>) : <li>None reported</li>}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Chronic Conditions</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                     {selectedRecord.conditions.length > 0 ? selectedRecord.conditions.map((condition, i) => <li key={i}>{condition}</li>) : <li>None reported</li>}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 mb-1">Current Medications</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                     {selectedRecord.medications.length > 0 ? selectedRecord.medications.map((med, i) => <li key={i}>{med}</li>) : <li>None reported</li>}
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        {/* Visit History */}
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Visit History</h4>
                            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                                {selectedRecord.visits.map((visit, index) => (
                                    <div key={index} className="p-4 border rounded-md bg-gray-50">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="font-medium text-sm">{visit.reason}</p>
                                            <p className="text-xs text-gray-500">{visit.date} (Dr. {visit.doctor})</p>
                                        </div>
                                        <p className="text-sm text-gray-600">{visit.notes}</p>
                                    </div>
                                ))}
                                {selectedRecord.visits.length === 0 && <p className="text-sm text-gray-500 italic">No visit history recorded.</p>}
                            </div>
                        </div>
                    </CardContent>
                     <CardFooter>
                        <Button>Add New Visit Note</Button>
                    </CardFooter>
                </Card>
            ) : (
                <Card>
                    <CardContent className="py-12 text-center text-gray-500">
                        {selectedPatientId ? 'No records found for this patient.' : 'Please select a patient to view their records.'}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}


// Billing View
function BillingView() {
    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">Billing & Invoices</h1>
                <Button>Generate New Invoice</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Invoice History</CardTitle>
                     <CardDescription>View and manage patient invoices.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice ID</TableHead>
                                <TableHead>Patient</TableHead>
                                <TableHead className="hidden sm:table-cell">Date</TableHead>
                                <TableHead className="hidden md:table-cell">Service</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockInvoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
                                    <TableCell className="font-medium">{invoice.patientName}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{invoice.date}</TableCell>
                                    <TableCell className="hidden md:table-cell">{invoice.service}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                            invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800' // Example for 'Overdue'
                                        }`}>
                                            {invoice.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            <Button variant="ghost" size="sm">View</Button>
                                            {invoice.status === 'Pending' && <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">Send Reminder</Button>}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}


// Main App Component
function App() {
  // State to manage the current view/page being displayed
  const [currentView, setCurrentView] = React.useState('dashboard'); // Default view
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Function to render the component based on the current view state
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'patients':
        return <PatientListView />;
      case 'appointments':
        return <AppointmentBookingView />;
      case 'chat':
        return <ChatInterfaceView />;
      case 'records':
        return <MedicalRecordsView />;
      case 'billing':
        return <BillingView />;
      default:
        return <DashboardView />; // Fallback to dashboard
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);


  return (
    // Main application container using Flexbox
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        setView={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
       />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
         {/* Header Bar */}
         <Header toggleMobileMenu={toggleMobileMenu} />

        {/* Content Area - Scrollable */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderView()}
        </main>
      </div>

       {/* Mobile Menu Overlay */}
       {isMobileMenuOpen && (
            <div
                className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
                onClick={closeMobileMenu}
            ></div>
        )}
    </div>
  );
}

// Export the main App component
export default App;


