import { Flex, IconButton, SmartLink, Text, Line } from "@once-ui-system/core";
import { person, social, routes, about, work, blog, contact } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    about && { label: about.label, path: about.path, enabled: routes["/about"] },
    work && { label: work.label, path: work.path, enabled: routes["/project"] },
    blog && { label: blog.label, path: blog.path, enabled: routes["/blog"] },
    contact && { label: contact.label, path: contact.path, enabled: routes["/contact"] },
  ]
    .filter(Boolean)
    .filter((link) => link.enabled) as Array<{ label: string; path: string; enabled: boolean }>;

  return (
    <Flex
      as="footer"
      className={styles.footer}
      fillWidth
      horizontal="center"
      vertical="center"
    >
      <Flex
        className={styles.footerContent}
        maxWidth="l"
        fillWidth
        vertical="center"
        mobileDirection="column"
      >
        {/* Navigation Links */}
        <Flex className={styles.navLinks} horizontal="center" wrap>
          {footerLinks.map((link, index) => (
            <Flex key={link.path} className={styles.linkWrapper} horizontal="center" vertical="center">
              <SmartLink
                href={link.path}
                className={styles.footerLink}
              >
                <Text variant="body-default-m" onBackground="neutral-medium" className={styles.linkText}>
                  {link.label}
                </Text>
              </SmartLink>
              {index < footerLinks.length - 1 && (
                <Text variant="body-default-m" onBackground="neutral-weak" className={styles.separator}>
                  /
                </Text>
              )}
            </Flex>
          ))}
        </Flex>

        {/* Social Links */}
        <Flex className={styles.socialLinks} gap="16" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="m"
                  variant="ghost"
                  className={styles.socialIcon}
                />
              ),
          )}
        </Flex>

        {/* Divider */}
        <Line
          background="neutral-alpha-weak"
          fillWidth
          className={styles.divider}
        />

        {/* Bottom Section */}
        <Flex 
          className={styles.bottomSection}
          fillWidth
          horizontal="center"
          vertical="center"
          mobileDirection="column"
        >
          <Text variant="body-default-m" onBackground="neutral-weak" align="center" className={styles.copyright}>
            © {currentYear}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak" align="center" className={styles.builtWith}>
            Built with <span className={styles.techHighlight}>Next.js</span> & <span className={styles.techHighlight}>Once UI</span>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
