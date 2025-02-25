/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldInput from '../FieldInput';
import { useCreateClient } from '../../queries/clientQuery';
import { useEffect } from 'react';
import { useUpdateSiteEngineer } from '@/queries/SiteEngineerQueries';

const UpdateSiteEngineer = ({ isOpen, closeForm, schema, title ,siteEngineer }) => {

const updateSiteEngineer=useUpdateSiteEngineer();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
const  SiteenginnerTrim=siteEngineer.fullName?.split(' ')||[];

useEffect(()=>{
 if(siteEngineer){
   reset({
     id: siteEngineer.id,
     firstName:SiteenginnerTrim[0]||'',
     secondName:SiteenginnerTrim[1] ||'',
     thirdName:SiteenginnerTrim[2] ||'',
     LastName:SiteenginnerTrim[3] ||'',
     email: siteEngineer.email,
     phoneNumber: siteEngineer.phoneNumber,
     address:siteEngineer.address,
     nationalNumber: siteEngineer.nationalNumber,
   hireDate: siteEngineer.hireDate?.toISOString().split('T')[0] || '',
   })
 }
},[siteEngineer,reset])


  const handelUpdateSiteEngineer = (data) => {
     updateSiteEngineer.mutate(data);
    reset();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"></div>

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-0 hover:bg-blue-600 transition-all">
                  {title }
                </h2>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(handelUpdateSiteEngineer)}>
                     <div className='flex justify-between gap-4'>
                     <FieldInput
                    id="firstName"
                    label="الاسم الاول"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="الاسم الاول"
                  />
                     <FieldInput
                    id="secondName"
                    label="الاسم الثاني"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="الاسم الثاني"/>           
                     </div>
                  
                     <div className='flex justify-between gap-4'>
                     <FieldInput
                    id="thirdName"
                    label="الاسم الثالث"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="الاسم الثالث"
                  />
                     <FieldInput
                    id="LastName"
                    label="اسم القبيله "
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="اسم القبيله "
                  /> </div>
                  
                   
                   <div className='flex justify-between gap-4'>

                   <FieldInput
                    id="phoneNumber"
                    label="رقم الهاتف"
                    type="tel"
                    register={register}
                    errors={errors}
                    placeholder="73XXXXXXX"
                  />
                   <FieldInput
                    id="nationalNumber"
                    label="الرقم الوطني  "
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="ادخل الرقم الوطني"
                  />
                   </div>
                   <FieldInput
                    id="email"
                    label="الايميل "
                    type="tel"
                    register={register}
                    errors={errors}
                    placeholder="example@gmail.com"
                  />
                  <div className='flex justify-between gap-4'>
                  <FieldInput
                    id="address"
                    label="العنوان "
                    type="tel"
                    register={register}
                    errors={errors}
                    placeholder="العنوان"
                  />
                  
                  <FieldInput
                    id="hireDate"
                    label="تاريخ التقديم "
                    type="date"
                    register={register}
                    errors={errors}
                    placeholder="تاريخ التقديم "
                  />
                  </div>


                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                      hidden={updateSiteEngineer.isPending}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={updateSiteEngineer.isPending}
                    >
                      تعديل 
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateSiteEngineer;

