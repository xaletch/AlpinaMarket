import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Item } from '../../components/Order/Item';

interface MyForm {
    name: string;
    surname: string;
    telephone: string;
    email: string;
};

export const Information = ( { setCheckoutTwo } ) => {

    const { register, handleSubmit } = useForm<MyForm>();

    const face = ["Физическое лицо", "Юридическое лицо"];

    const [selected, setSelected] = useState<number | null>(0);
    const [entityValue, setEntityValue] = useState<string>('');
    const [personalEditing, setPersonalEditing] = useState<boolean>(false);

    const [dataUser, setDataUser] = React.useState([]);

    const handleClickFaceSelected = (index: number) => {
        setSelected(index);
    };

    React.useEffect(() => {
        // console.log(dataUser);
        window.scrollTo(0, 0);
    }, [dataUser]);

    const handleOnChangeEntity = (e: any) => {
        if (selected === 1) {
            setEntityValue(e.target.value);
        }
    };

    const submit: SubmitHandler<MyForm> = (data: any) => {
        if (data !== undefined) {
          setCheckoutTwo(true);
          setPersonalEditing(true);
        }
      
        setDataUser((prevData) => [...prevData, data]);
    };
      
    
    const handleClickEdit = () => {
        setPersonalEditing(false);
        window.scrollTo(0, 0);
    }

    return (
        <div className='order_information'>
            <div className='order_content-name'>
                <div className='order_content-name-num'>1</div>
                <h2>Персональные данные</h2>
            </div>
            <div className={personalEditing ? 'order_information-block-none' : 'order_information-block'}>
                <div className='order_information-head'>
                    {face.map((item, index) => (
                        <div className={selected === index ? 'order_information-head-name order_information-head-active' : 'order_information-head-name'} onClick={() => handleClickFaceSelected(index)} key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    {selected === 0 ? 
                        <div className='order_information-form'>
                            <input type="text" {...register('name', { required: true })} placeholder='Имя*' />
                            <input type="text" {...register('surname', { required: true })} placeholder='Фамилия*' />
                            <input type="telephone" {...register('telephone', { required: true })} placeholder='Телефон*' />
                            <input type="email" {...register('email', { required: true })} placeholder='Email*' />
                            <button type='submit' className='order_information-btn'>Продолжить</button>
                        </div>
                        : 
                        <div className='order_information-form'>
                            <label>Введите ИНН или название своей организации.</label>
                            <input type="text" onChange={handleOnChangeEntity} value={entityValue} placeholder='ИНН или название организации*' />
                            {entityValue.length === 12 && (
                                <div className='order_information-form'>
                                    <input type="text" placeholder='Имя*' />
                                    <input type="text" placeholder='Фамилия*' />
                                    <input type="telephone" placeholder='Телефон*' />
                                    <input type="email" placeholder='Email*' />
                                    <button type='submit' className='order_information-btn'>Продолжить</button>
                                </div>
                            )}
                        </div>
                    }
                </form>
            </div>
            <div className={personalEditing ? 'order_information-block-edit_active' : 'order_information-block-edit'}>
                {dataUser.map((data, index) => (
                    <div className='order_information-block_data' key={index}>
                        <h4 className='order_information-block_data-name'>{data.name} {data.surname}</h4>
                        <p className='order_information-block_data-info'>{data.email}</p>
                        <p className='order_information-block_data-info'>{data.telephone}</p>
                    </div>
                ))}
                <p className='order_information-block_data-edit button__more' onClick={handleClickEdit}>
                    Изменить
                    <div className='border'></div>
                </p>
            </div>
        </div>
    )
}
