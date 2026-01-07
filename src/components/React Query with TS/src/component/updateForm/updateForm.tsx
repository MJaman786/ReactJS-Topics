import { User, Mail, Globe, Phone, MapPin, Building2, Save, X } from 'lucide-react';
import useGetUserById from '../../hooks/useGetUserById';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUpdateUser from '../../hooks/useUpdateUser';
import type { UserData } from '../../types/apiData.types';
// import toast from 'react-hot-toast';
// import type { UserData } from '../../types/apiData.types';

export default function UpDateForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useGetUserById(id);
    console.log(data);

    // type FormData = {
    //     name: string;
    //     username: string;
    //     email: string;
    //     phone: string;
    //     website: string;
    //     address: {
    //         street: string;
    //         suite: string;
    //         city: string;
    //         zipcode: string;
    //     };
    //     company: {
    //         name: string;
    //         catchPhrase: string;
    //     };
    // };

    const [formData, setFormData] = useState<UserData>({
        id: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        },
    });

    useEffect(() => {
        if (!data) return;

        setFormData({
            id: data.id ?? '',
            name: data.name ?? '',
            username: data.username ?? '',
            email: data.email ?? '',
            phone: data.phone ?? '',
            website: data.website ?? '',
            address: {
                street: data.address?.street ?? '',
                suite: data.address?.suite ?? '',
                city: data.address?.city ?? '',
                zipcode: data.address?.zipcode ?? '',
            },
            company: {
                name: data.company?.name ?? '',
                catchPhrase: data.company?.catchPhrase ?? '',
                bs: data.company.bs ?? ''
            },
        });
    }, [data]);


    // handler for top-level properties
    const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    // handler for address properties
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }))
    };

    // handler for company properties
    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            company: {
                ...prev.company,
                [name]: value
            }
        }))
    };

    // handel submit
    const updateUser = useUpdateUser();
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!id) return;
        updateUser.mutate({ id, payload:formData });
        navigate(-1);
    }

    return (
        <div className="min-h-screen bg-zinc-950 p-6 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="px-8 py-6 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-white">Update Profile</h2>
                        <p className="text-zinc-500 text-sm">Modify account and company details</p>
                    </div>
                    <button onClick={() => navigate(-1)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>

                    {/* Section 1: Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                <User size={14} /> Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleBasicChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleBasicChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                <Mail size={14} /> Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleBasicChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                <Phone size={14} /> Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleBasicChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Section 2: Address */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold flex items-center gap-2 border-b border-zinc-800 pb-2">
                            <MapPin size={16} className="text-indigo-500" /> Address Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Street</label>
                                <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Suite</label>
                                <input type="text" name="suite" value={formData.address.suite} onChange={handleAddressChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">City</label>
                                <input type="text" name='city' value={formData.address.city} onChange={handleAddressChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Zipcode</label>
                                <input type="text" name='zipcode' value={formData.address.zipcode} onChange={handleAddressChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Website</label>
                                <div className="relative">
                                    <Globe size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
                                    <input type="text" name="website" value={formData.website} onChange={handleBasicChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Company */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold flex items-center gap-2 border-b border-zinc-800 pb-2">
                            <Building2 size={16} className="text-indigo-500" /> Company Info
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Company Name</label>
                                <input type="text" name="name" value={formData.company.name} onChange={handleCompanyChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-wider">Catch Phrase</label>
                                <textarea
                                    name="catchPhrase"
                                    value={formData.company.catchPhrase}
                                    onChange={handleCompanyChange}
                                    rows={2}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-indigo-500 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="pt-6 border-t border-zinc-800 flex items-center justify-end gap-4">
                        <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                            Clear
                        </button>
                        <button onClick={handleSubmit} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all">
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}