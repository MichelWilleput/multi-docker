FROM nginx:latest
# Delete the default configuration file that shows the welcome page
RUN rm /etc/nginx/conf.d/default.conf
# Copy your working, custom configuration file in its place
COPY ./default.conf /etc/nginx/conf.d/default.conf