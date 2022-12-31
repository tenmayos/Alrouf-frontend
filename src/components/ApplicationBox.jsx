import React from "react";
import TextInputSlice from "./TextInputSlice";

function ApplicationBox() {

    return (
        <div className="submission-box">
            <form>
                <TextInputSlice
                    placeholder="الاسم الاول هنا"
                    identifierText="الاسم الاول"
                />
                <br />
                <TextInputSlice
                    placeholder="اسم الأب هنا"
                    identifierText="اسم الأب"
                />
                <br />
                <TextInputSlice
                    placeholder="اسم العائلة هنا"
                    identifierText="اسم العائلة"
                />
            </form>
        </div>
    )
}

export default ApplicationBox;