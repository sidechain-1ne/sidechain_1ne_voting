// Import the voteCounts object and collectedVotes array from vote.js
const { voteCounts, collectedVotes } = require('./vote');

// Function to get real-time vote counts
function getVoteCounts() {
    // Update vote counts based on collected votes
    for (const option of collectedVotes) {
        if (voteCounts[option] !== undefined) {
            voteCounts[option] += 1;
        }
    }
    collectedVotes.length = 0; // Clear the collected votes array

    const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);

    const results = Object.keys(voteCounts).map(option => {
        const percentage = (voteCounts[option] / totalVotes) * 100;
        return `${option} → ${Math.round(percentage)}%`;
    });

    return results.join(' | ');
}

// Export the function for use in Nightbot command
module.exports = getVoteCounts;
