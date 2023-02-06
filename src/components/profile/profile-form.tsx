import Button from '@/components/ui/button';
import Card from '@/components/ui/cards/card';
import Input from '@/components/ui/forms/input';
import { useTranslation } from 'next-i18next';
import pick from 'lodash/pick';
import { Form } from '@/components/ui/forms/form';
import { useUpdateUser } from '@/framework/user';
import type { UpdateUserInput, User } from '@/types';
import PhoneInput from "@/components/ui/forms/phone-input";
import {Controller} from "react-hook-form";
import React from "react";
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom'


const ProfileForm = ({ user }: { user: User }) => {
  const { t } = useTranslation('common');
  const { mutate: updateProfile, isLoading } = useUpdateUser();
  const [userAtom] = useAtom(userData)
  
  function onSubmit(values: UpdateUserInput) {
    if (!user) {
      return false;
    }
    updateProfile({
      name: values.name,
      surname: values.surname,
      email: values.email,
      token: userAtom.token,
      client: userAtom.id
    });
  }

  return (
    <Form<UpdateUserInput>
      onSubmit={onSubmit}
      useFormProps={{
        ...(user && {
          defaultValues: pick(user, ['name', 'surname', 'email',]),
        }),
      }}
    >
      {({ register, control }) => (
        <>
          <div className="mb-8 flex">
            <Card className="w-full">
              <div className="mb-6 flex flex-row">
                <Input
                  className="flex-1"
                  label={t('text-name')}
                  {...register('name')}
                  variant="outline"
                />
              </div>
              <div className="mb-6 flex flex-row">
                <Input
                  className="flex-1"
                  label={t('text-surname')}
                  {...register('surname')}
                  variant="outline"
                />
              </div>
              <div className="mb-6 flex flex-row">
                <Input
                  className="flex-1"
                  label={t('text-email')}
                  {...register('email')}
                  variant="outline"
                />
              </div>

              <div className="flex">
                <Button
                  className="ltr:ml-auto rtl:mr-auto"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {t('text-save')}
                </Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </Form>
  );
};

export default ProfileForm;
