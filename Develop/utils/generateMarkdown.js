// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  const{avatar_url,login}= data 
  return `
# ${data.title}
![${login} avatar](${avatar_url})
`;
}

module.exports = generateMarkdown;
