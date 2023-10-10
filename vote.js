// Initialize vote counts
let voteCounts = {
    1: 0,
    2: 0,
    3: 0
};

// Function to record votes
function vote(option) {
    if (voteCounts[option] !== undefined) {
        voteCounts[option] += 1;
    }
}

// Export the voteCounts object and vote function
module.exports = {
    voteCounts,
    vote
};