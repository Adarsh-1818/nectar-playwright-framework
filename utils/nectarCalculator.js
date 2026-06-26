class NectarCalculator {

    // Base rule:
    // £1 spent = 1 Nectar point
    static calculatePoints(totalAmount) {
      return Math.floor(totalAmount);
    }
  
    // Loyalty tiers (VERY IMPORTANT for realism)
    static getLoyaltyTier(totalPoints) {
      if (totalPoints >= 500) return 'GOLD';
      if (totalPoints >= 200) return 'SILVER';
      return 'BRONZE';
    }
  
    // Discount logic
    static applyDiscount(totalAmount, tier) {
      if (tier === 'GOLD') return totalAmount * 0.8; // 20% off
      if (tier === 'SILVER') return totalAmount * 0.9; // 10% off
      return totalAmount;
    }
  }
  
  module.exports = { NectarCalculator };