
export const downloadResume = () => {
  // In a real app, this would point to the actual resume PDF file
  const link = document.createElement("a");
  link.href = "/resume-priyanath-bhukta.pdf";
  link.download = "Resume-Priyanath-Bhukta.pdf";
  link.click();
};

// You can add admin-related utilities here
export const isValidAdminUser = (token: string) => {
  // In a real app, this would validate a JWT token or similar
  return token === "valid_admin_token";
};
