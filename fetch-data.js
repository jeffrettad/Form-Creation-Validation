
// fetch-data.js

// Step 1: Define the async function to fetch user data
async function fetchUserData() {
    // Step 2: API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

            // Step 3: Select the data container element
                const dataContainer = document.getElementById('api-data');

                    try {
                            // Step 4: Fetch data from the API
                                    const response = await fetch(apiUrl);

                                            // Check if the response is OK (status 200-299)
                                                    if (!response.ok) {
                                                                throw new Error(`HTTP error! Status: ${response.status}`);
                                                                        }

                                                                                // Convert response to JSON
                                                                                        const users = await response.json();

                                                                                                // Step 5: Clear the loading message
                                                                                                        dataContainer.innerHTML = '';

                                                                                                                // Step 6: Create and append user list
                                                                                                                        const userList = document.createElement('ul');

                                                                                                                                users.forEach(user => {
                                                                                                                                            const listItem = document.createElement('li');
                                                                                                                                                        listItem.textContent = user.name;
                                                                                                                                                                    userList.appendChild(listItem);
                                                                                                                                                                            });

                                                                                                                                                                                    dataContainer.appendChild(userList);

                                                                                                                                                                                        } catch (error) {
                                                                                                                                                                                                // Step 7: Error handling
                                                                                                                                                                                                        dataContainer.innerHTML = '';
                                                                                                                                                                                                                dataContainer.textContent = 'Failed to load user data.';
                                                                                                                                                                                                                        console.error('Error fetching user data:', error);
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            // Step 8: Invoke fetchUserData on DOMContentLoaded
                                                                                                                                                                                                                            document.addEventListener('DOMContentLoaded', fetchUserData);
                                                                                                                                                                                                                            