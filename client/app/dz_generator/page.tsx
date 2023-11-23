"use client"

import { generateDocument } from "../utils/doctemplater";

const DZ_GENERATOR = () => {
    return (
        <div>
            <button onClick={generateDocument}>GENERATE</button>
        </div>
    )
}
export default DZ_GENERATOR;