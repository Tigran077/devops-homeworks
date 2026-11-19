const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('devops-academy-theme');
if(savedTheme==='light')document.body.classList.add('light');
function syncTheme(){const light=document.body.classList.contains('light');themeToggle.textContent=light?'☾ DARK MODE':'☀ LIGHT MODE';themeToggle.setAttribute('aria-pressed',String(light));}
syncTheme();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('devops-academy-theme',document.body.classList.contains('light')?'light':'dark');syncTheme();});
const modules=[...document.querySelectorAll('.module')];
function setOpen(module,open){module.classList.toggle('open',open);module.querySelector('.module-head').setAttribute('aria-expanded',String(open));}
modules.forEach(module=>module.querySelector('.module-head').addEventListener('click',()=>{setOpen(module,!module.classList.contains('open'));syncExpand();}));
const expandAll=document.getElementById('expandAll');function syncExpand(){expandAll.textContent=modules.every(m=>m.classList.contains('open'))?'− COLLAPSE ALL':'+ EXPAND ALL';}
expandAll.addEventListener('click',()=>{const shouldOpen=!modules.every(m=>m.classList.contains('open'));modules.forEach(m=>setOpen(m,shouldOpen));syncExpand();});
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('terminalForm'),input=document.getElementById('commandInput'),output=document.getElementById('terminalOutput');
const commands={help:['Available commands:','help  — list commands','whoami — your role','ls    — list learning modules','docker — Docker overview','kubectl — Kubernetes overview','terraform — Terraform overview','status — system status','clear — clear terminal'],whoami:['devops-student // future infrastructure engineer'],ls:['ansible/ ssh/ virtualization/ docker/ cicd/ aws/ kubernetes/ terraform/ monitoring/'],docker:['Docker packages applications and dependencies into portable containers.'],kubectl:['kubectl is the CLI used to manage Kubernetes cluster resources.'],terraform:['Terraform provisions infrastructure with declarative code (IaC).'],status:['● Learning environment: ONLINE','● 9 course modules: READY','● Browser terminal: SIMULATION MODE']};
function printLine(message,cls=''){const div=document.createElement('div');div.textContent=message;if(cls)div.className=cls;output.appendChild(div);output.scrollTop=output.scrollHeight;}
form.addEventListener('submit',e=>{e.preventDefault();const command=input.value.trim().toLowerCase();input.value='';if(!command)return;printLine('➜ ~ '+command,'term-green');if(command==='clear'){output.replaceChildren();return;}const lines=commands[command]||[`Command not found: ${command}. Type help for available commands.`];lines.forEach(line=>printLine(line));});
