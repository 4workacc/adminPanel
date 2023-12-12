import styles from "@/app/ui/dashboard/users/userInfo/userInfo.module.css";
import { requestUserDataById } from "@/app/utils/requestUserDataById";
import { IKey, IUser } from "@/app/utils/types";
import Image from "next/image";
import { dateSplitter } from "@/app/utils/dateSplitter";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserInfoPage = async ({ params }: { params: { id: string } }) => {    
    const path: string = "";
    const { id } = params;
    const userData: IUser | {
        fio: string;
        code0: number,
        code1: string,
        employement?: string,
        struct?: string,
        unit?: string,
        post?: string,
        certData: IKey | null
    } = await requestUserDataById(+id) || {
        fio: "aa",
        code0: -1,
        code1: "",
        certData: null 
    };
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/userIcon.png" alt="" fill className={styles.image} />
                </div>
                Joy
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <div className={styles.infoPanel}>
                        <div className={styles.infoPanelLeft}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Joy"
                                value={userData!.fio} />

                            <label>Employee</label>
                            <input
                                type="text"
                                name="Employee"
                                placeholder="Employee"
                                value={userData.employement} />

                            <label>Code0</label>
                            <input
                                type="text"
                                name="Code0"
                                placeholder="Code0"
                                value={userData.code0}
                            />
                            <label>Code1</label>
                            <input
                                type="text"
                                name="Code1"
                                placeholder="Code1"
                                value={userData.code1}
                            />
                            <label>Struct</label>
                            <input
                                type="text"
                                name="struct"
                                placeholder="struct"
                                value={userData.struct}
                            />
                            <label>Post</label>
                            <input
                                type="text"
                                name="post"
                                placeholder="Post"
                                value={userData.post} />

                            <label>Unit</label>
                            <input
                                type="text"
                                name="ubit"
                                placeholder="Unit"
                                value={userData.unit} />
                        </div>
                        <div className={styles.infoPanelRight}>
                            <label>CertEndDate</label>
                            <input
                                type="text"
                                disabled
                                name="cerdEnd"
                                placeholder="cerdEnd"
                                value={dateSplitter(userData.certData!.end_cert) || "no key"} />

                        </div>
                    </div>
                    <div className={styles.gui}>
                        <button>Upadte</button>
                        <Link
                            className={styles.userPageButton}
                            href={`/dz_generator?fio=${userData.fio ? userData.fio : ""}&emp=${userData.employement}&certDataFam=${userData.certData?.doc_fam}&certDataEmp=${userData.certData?.doc_employement}&certDataId=${userData.certData?.cert_id}`}>
                            GenKeyDOCs
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UserInfoPage;