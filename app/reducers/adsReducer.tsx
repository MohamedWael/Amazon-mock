export const ADS_UPDATE_ACTION = "ads/update"

export interface UpdateAdsAction {
    type: string
    payload?: any
}

type Action = UpdateAdsAction;

export default function adsReducer(state = [], action: Action) {

    switch (action.type) {
        case ADS_UPDATE_ACTION:
            return [...state, action.payload]
        default:
            return state

    }
}
