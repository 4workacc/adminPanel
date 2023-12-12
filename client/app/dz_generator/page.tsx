"use client"

import { generateDocument } from "../utils/doctemplater";
import { useState } from 'react';

import styles from '../ui/dz_generator/dz_generator.module.css';
import { IKey } from "../utils/types";

interface IUserData {
    fam: string;
    name: string;
    subname: string;
    pass_long: string;
    pass_short: string;
    pass_who_0: string;
    pass_who_1: string;
    pass_when: string;
    emp: string;
    isOldCert: boolean,
    old_certId: string;
    old_fam: string;
    old_emp: string;
}
interface IProp {
    searchParams: {
        fio: string,
        emp: string,
        certDataFam: string,
        certDataEmp: string,
        certDataId: string,    
    };
}

const DZ_GENERATOR = ({searchParams}:IProp) => {
    const requestFIO: string[] = (searchParams.fio ? searchParams.fio.split(' ') : []);   
    const requestEmp: string = (searchParams.emp ? searchParams.emp : "");  
    const requestCerdDataFam: string = searchParams.certDataFam;
    const requestCerdDataEmp: string = searchParams.certDataEmp;
    const requestCerdDataId: string = searchParams.certDataId;    
    console.log(searchParams); 
    const [fam, changeFam] = useState<string>(requestFIO[0]||"");
    const famChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeFam(e.target.value);
    }

    const [nam, changeNam] = useState<string>(requestFIO[1]||"");
    const namChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNam(e.target.value);
    }

    const [sub, changeSub] = useState<string>(requestFIO[2]||"");
    const subChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSub(e.target.value);
    }

    const [pass_long, changePass_long] = useState<string>("");
    const pass_longChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePass_long(e.target.value);
    }

    const [pass_short, changePass_short] = useState<string>("");
    const pass_shortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePass_short(e.target.value);
    }

    const [pass_who, changePass_who] = useState<string>("");
    const pass_whoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePass_who(e.target.value);
    }

    const [pass_when, changePass_when] = useState<string>("");
    const changePassWhen = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePass_when(e.target.value);
    }

    const [isKeyOld, changeIsKeyOld] = useState<boolean>(false);

    const [emp, changeEmp] = useState<string>(requestEmp);
    const empChange = (e: React.ChangeEvent<HTMLSelectElement>) => {       
        changeEmp(e.target.value);
    }

    const [oldfam, changeOldFam] = useState<string>(requestCerdDataFam);
    const oldfamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeOldFam(e.target.value);
    }

    const [certId, certIdChange] = useState<string>(requestCerdDataId);
    const changeCertId = (e: React.ChangeEvent<HTMLInputElement>) => {
        certIdChange(e.target.value);
    }

    const [certDate, certDateChange] = useState<string>("");
    const changeCertDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        certDateChange(e.target.value);
    }

    const [old_emp, oldEmpChange] = useState<string>("");
    const changeOldEmp = (e: React.ChangeEvent<HTMLSelectElement>) => {
        oldEmpChange(e.target.value);
    }
    return (
        <div className={styles.container}>
            <label>Фамилия</label>
            <input
                type="text"
                name="fam"
                placeholder="Иванов"
                value={fam}
                onChange={famChange}
            />

            <label>Имя</label>
            <input
                type="text"
                name="name"
                placeholder="Иван"
                value={nam}
                onChange={namChange}
            />

            <label>Отчество</label>
            <input
                type="text"
                name="subname"
                placeholder="Иванович"
                value={sub}
                onChange={subChange}
            />

            <div className={styles.passInfo}>
                <span>
                    <label>Паспорт длинный</label>
                    <input
                        type="text"
                        name="pass_long"
                        placeholder="1231212F012PB0"
                        maxLength={14}
                        minLength={14}
                        value={pass_long}
                        onChange={pass_longChange}
                    />
                </span>
                <span>
                    <label>Паспорт короткий</label>
                    <input
                        type="text"
                        name="pass_short"
                        placeholder="AS1231212"
                        maxLength={9}
                        minLength={9}
                        value={pass_short}
                        onChange={pass_shortChange}
                    />
                </span>
                <span>
                    <label>Паспорт выдан кем</label>
                    <input
                        type="text"
                        name="pass_who"
                        placeholder="Ошмянским РОДВ Гродненской обл."
                        value={pass_who}
                        onChange={pass_whoChange}
                    />
                </span>
                <span>
                    <label>Паспорт выдан когда</label>
                    <input
                        type="date"
                        name="pass_when"
                        value={pass_when}
                        onChange={changePassWhen} />
                </span>
            </div>
            <div className={styles.empInfo}>
                <label>Текущая должность</label>
                <select
                    name="emp"
                    onChange={empChange}>
                    <option value={"Дворник"}>Дворник</option>
                    <option value={"Водитель"}>Водитель</option>
                    <option value={"Сторож"}>Сторож</option>
                    <option value={"Завхоз"}>Завхоз</option>
                    <option value={"Директор"}>Директор</option>
                </select>
            </div>
            <div className={styles.keyInfo}>
                <label>Был ранее ключ</label>
                <input
                    type="checkbox"
                    onChange={() => changeIsKeyOld(!isKeyOld)}

                />
                {isKeyOld && <div className={styles.certInfo}>
                    <span>
                        <label>Фамилия на момент получения</label>
                        <input
                            type="text"
                            name="old_fio"
                            placeholder="Иванов"
                            value={oldfam}
                            onChange={oldfamChange}
                        />
                    </span>
                    <span>
                        <label>Должность на момент получения</label>
                        <select
                            name="emp"
                            onChange={changeOldEmp}>
                            <option value={"Дворник"} >Дворник</option>
                            <option value={"Водитель"}>Водитель</option>
                            <option value={"Сторож"}>Сторож</option>
                            <option value={"Завхоз"}>Завхоз</option>
                            <option value={"Директор"}>Директор</option>
                        </select>
                    </span>
                    <span>
                        <label>ID ключа</label>
                        <input
                            className={styles.cerdId}
                            type="text"
                            name="cert_id"
                            placeholder="4040AAAA1111QQQQ2222FFFF"
                            maxLength={24}
                            minLength={24}
                            value={certId}
                            onChange={changeCertId}
                        />
                    </span>
                    {/* <span>
                        <label>Ключ выдан когда</label>
                        <input
                            type="date"
                            name="cert_date"
                            value={certDate}
                            onChange={changeCertDate}
                        />
                    </span> */}
                </div>}
            </div>
            <div className={styles.butInfo}>
                <button onClick={() => {
                    let whoArr = pass_who.split(" ");
                    let whenArr = pass_when.split("-");
                    generateDocument({
                        fam: fam,
                        name: nam,
                        subname: sub,
                        pass_long: pass_long,
                        pass_short: pass_short,
                        pass_who_0: `${whoArr[0]} ${whoArr[1]}`,
                        pass_who_1: `${whoArr[2]} ${whoArr[3]}`,
                        pass_when: `${whenArr[2]}.${whenArr[1]}.${whenArr[0]}`,
                        emp: emp,
                        is_oldCert: isKeyOld,
                        old_certId: certId,
                        old_fam: oldfam,
                        old_emp: old_emp
                    })
                }
                }>GENERATE</button>
            </div>
        </div>
    )
}
export default DZ_GENERATOR;