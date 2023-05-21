import React, { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.type}</p>
            <p>Age: {formData.age}</p>

            {formData.type === "FormA" ? (
                <p>DC Shows: {formData.show}</p>
            ) : (
                <p>Marvel Shows: {formData.show}</p>
            )}
        </div>
    );
}
export default Summary;
