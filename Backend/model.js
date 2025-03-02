import mongoose from "mongoose";

const Schema = mongoose.Schema;





const userSchema = new Schema({
    tripId: { type: Number, required: true },
    source: {
        location: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true }
        },
        hopCode: { type: String },
        address: {
            addressLine1: { type: String },
            addressLine2: { type: String },
            addressLine3: { type: String },
            city: { type: String },
            pinCode: { type: String },
            state: { type: String }
        },
        description: { type: String },
        label: { type: String }
    },
    destination: {
        location: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true }
        },
        hopCode: { type: String },
        address: {
            addressLine1: { type: String },
            addressLine2: { type: String },
            addressLine3: { type: String },
            city: { type: String },
            pinCode: { type: String },
            state: { type: String }
        },
        description: { type: String },
        label: { type: String }
    },
    vehicle: {
        regNo: { type: String }
    },
    qualityCheck: {
        answers: { type: mongoose.Schema.Types.Mixed, default: {} },
        comment: { type: String, default: null },
        images: { type: [String], default: [] },
        approvedWithDeviations: { type: Boolean },
        isQCRejected: { type: Boolean }
    },
    isActive: { type: Boolean },
    isDeleted: { type: Boolean },
    cancellationComment: { type: String },
    epod: { type: mongoose.Schema.Types.Mixed, default: null },
    startTime: { type: Date },
    tracking: {
        path: { type: [mongoose.Schema.Types.Mixed], default: [] },
        current: { type: mongoose.Schema.Types.Mixed, default: null },
        next: { type: mongoose.Schema.Types.Mixed, default: null }
    },
    transporter: {
        userId: { type: String },
        email: { type: String },
        name: { type: String }
    },
    via: { type: [mongoose.Schema.Types.Mixed], default: [] },
    status: { type: String },
    subStatus: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    createdBy: { type: String },
    updatedBy: { type: String },
    subStatusUpdatedAt: { type: Date },
    vehiclePlacementCalculated: { type: Boolean },
    delayedStatus: { type: Boolean },
    driverConsentProvided: { type: Boolean },
    indentIdInOrder: { type: Number },
    lateDelivery: {
        isLate: { type: Boolean }
    },
    trackingStatus: { type: Boolean },
    trackingCount: { type: Number },
    driverConsentStatusFromCargoExchange: { type: String },
    tryAfter15Minutes: { type: Boolean }
});


const userModel = mongoose.model('entries', userSchema);



export default userModel
