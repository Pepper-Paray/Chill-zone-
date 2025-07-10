
import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
    
<form id="chatForm">
    <input type="text" id="message" placeholder="Type your message"></input>
    <button type="submit">Send</button>
</form>

    document.getElementById('chatForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const message = document.getElementById('message').value;
        console.log('Message sent:', message); 
    });

