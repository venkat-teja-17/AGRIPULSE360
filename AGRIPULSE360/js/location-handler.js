// API Configuration
const PINCODE_API_URL = 'https://api.postalpincode.in/pincode/';

// Cache for storing location data
let locationCache = {
    states: null,
    districts: {},
    pincodeDetails: {}
};

// Function to fetch all states
async function getAllStates() {
    try {
        const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
        const data = await response.json();
        locationCache.states = data.states;
        return data.states;
    } catch (error) {
        console.error('Error fetching states:', error);
        return [];
    }
}

// Function to fetch districts based on state ID
async function getDistrictsByState(stateId) {
    if (locationCache.districts[stateId]) {
        return locationCache.districts[stateId];
    }

    try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
        const data = await response.json();
        locationCache.districts[stateId] = data.districts;
        return data.districts;
    } catch (error) {
        console.error('Error fetching districts:', error);
        return [];
    }
}

// Function to get location details by PIN code
async function getLocationByPincode(pincode) {
    if (locationCache.pincodeDetails[pincode]) {
        return locationCache.pincodeDetails[pincode];
    }

    try {
        const response = await fetch(`${PINCODE_API_URL}${pincode}`);
        const data = await response.json();
        
        if (data[0].Status === 'Success') {
            const locationInfo = data[0].PostOffice[0];
            const details = {
                state: locationInfo.State,
                district: locationInfo.District,
                division: locationInfo.Division,
                region: locationInfo.Region
            };
            locationCache.pincodeDetails[pincode] = details;
            return details;
        }
        return null;
    } catch (error) {
        console.error('Error fetching pincode details:', error);
        return null;
    }
}

// Function to populate state dropdown
async function populateStates() {
    const stateSelect = document.getElementById('state');
    if (!stateSelect) return;

    const states = await getAllStates();
    stateSelect.innerHTML = '<option value="">Select State</option>';
    
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.state_id;
        option.textContent = state.state_name;
        stateSelect.appendChild(option);
    });
}

// Function to populate district dropdown based on selected state
async function populateDistricts(stateId) {
    const districtSelect = document.getElementById('district');
    if (!districtSelect) return;

    const districts = await getDistrictsByState(stateId);
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district.district_id;
        option.textContent = district.district_name;
        districtSelect.appendChild(option);
    });
}

// Function to auto-fill location details based on PIN code
async function autoFillLocationByPincode(pincode) {
    const locationDetails = await getLocationByPincode(pincode);
    if (!locationDetails) return;

    const stateSelect = document.getElementById('state');
    const districtInput = document.getElementById('district');
    const villageInput = document.getElementById('village');

    if (stateSelect) stateSelect.value = locationDetails.state;
    if (districtInput) districtInput.value = locationDetails.district;
    if (villageInput) villageInput.value = locationDetails.division;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Populate states on page load
    populateStates();

    // Add event listener for state selection
    const stateSelect = document.getElementById('state');
    if (stateSelect) {
        stateSelect.addEventListener('change', (e) => {
            populateDistricts(e.target.value);
        });
    }

    // Add event listener for PIN code input
    const pincodeInput = document.getElementById('pincode');
    if (pincodeInput) {
        pincodeInput.addEventListener('change', (e) => {
            if (e.target.value.length === 6) {
                autoFillLocationByPincode(e.target.value);
            }
        });
    }
});
