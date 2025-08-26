import React from "react";

const Location = () => {
	return (
		<div className=" bg-gradient-to-br from-amber-50 to-gray-50 rounded-2xl shadow-xl overflow-hidden">
			<div className="p-6 border-b border-gray-200">
				<h3 className="text-xl font-bold text-gray-900">Find Us Here</h3>
				<p className="text-gray-600 mt-1">VPS Motors, Kurukshetra</p>
			</div>
			<div className="h-64 lg:h-80">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.6226634992502!2d76.88783249511478!3d29.967977514104412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46ce9724dfdf%3A0x10d62a94c7c21b65!2sRenault%20Kurukshetra!5e0!3m2!1sen!2sin!4v1756114044721!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="VPS Motors Location"
				/>
			</div>
		</div>
	);
};

export default Location;

